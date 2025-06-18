import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ModulesControls from "./ModulesControls"
import ModuleControlButtons from "./ModuleControlButtons"
import LessonControlButtons from "./LessonControlButtons"
import { ListGroup, FormControl } from "react-bootstrap"
import { BsGripVertical } from "react-icons/bs";
import { addModule, editModule, updateModule, deleteModule, setModules }
    from "./modulesReducer";
import { useSelector, useDispatch } from "react-redux";
import FacultyRoute from "../../Account/FacultyRoute";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const dispatch = useDispatch();
    const { modules } = useSelector((state: any) => state.modulesReducer);

    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
        setModuleName("");
    };

    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };

    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        fetchModules();
    }, [cid]);

    return (
        <div>
            <FacultyRoute>
                <ModulesControls setModuleName={setModuleName}
                    moduleName={moduleName}
                    addModule={createModuleForCourse} />
                <br /><br /><br /><br />
            </FacultyRoute>
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    .map((module: any) => (
                        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" /> {!module.editing && module.name}
                                {module.editing && (
                                    <FormControl className="w-50 d-inline-block"
                                        onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name} />
                                )}
                                <FacultyRoute>
                                <ModuleControlButtons moduleId={module._id}
                                        deleteModule={(moduleId) => removeModule(moduleId)}
                                        editModule={(moduleId) => dispatch(editModule(moduleId))} />
                                </FacultyRoute>
                            </div>
                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                        </ListGroup.Item>
                                    ))}</ListGroup>)}
                        </ListGroup.Item>))}
            </ListGroup>
        </div>
    );
}