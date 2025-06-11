import { useState } from "react"
import { FormControl } from "react-bootstrap"
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function Module() {
    const [module, setModule] = useState({
        id: 1, name: "default name",
        description: "default description", course: "DFT0000",
    });

    return (
        <div id="wd-module-object">
            <h4>Get Module</h4>
            <a id="wd-retrieve-module" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a> <br /> <br />

            <h4>Get Module Title</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Title
            </a> <br /> <br />

            <h4>Edit Module Title</h4>
            <a id="wd-edit-module-title" className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
                Edit Module Name
            </a>
            <FormControl className="w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} /> <br /> <br />

            <a id="wd-edit-module-description" className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}>
                Edit Module Description
            </a>
            <FormControl className="w-75" id="wd-module-description"
                defaultValue={module.description} onChange={(e) =>
                    setModule({...module, description: e.target.value})} />
            <hr />
        </div>
    );
}