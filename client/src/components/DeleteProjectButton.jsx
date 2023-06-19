import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutation";
import { useMutation } from "@apollo/client";
import { cache } from "../App";
import { GET_PROJECT } from "../queries/projectQueries";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  console.log("Each Project ", cache.data);

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
    // update(cache, mutationResult) {
    //   const deletedProject = mutationResult.data.deleteProject;
    //   console.log("deletedProject ", deletedProject);

    //   const project = cache.readQuery({
    //     query: GET_PROJECT,
    //     variables: { id: projectId },
    //   });
    //   console.log("project ", project);

    //   // Other project is null, get_clients and get_projects are also null
    //   // Because we have switch to other route
    //   // cache does not keep data cache on other route
    //   const otherProject = cache.readQuery({
    //     query: GET_PROJECT,
    //     variables: { id: "648d91da51a743c581728a4a" },
    //   });
    //   console.log("other project ", otherProject);
    // },
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
