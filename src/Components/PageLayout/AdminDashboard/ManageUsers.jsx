import React from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import LoadAlluser from "../../CustomHook/LoadAlluser";
import AxiosFetch from "../../CustomHook/AxiosFetch";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [refetch, users] = LoadAlluser();
  const axiosSecure = AxiosFetch();
  // handle make admin funtion is here
  const handlemakeadmin = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to make him Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.post(
          `/handleuserrole?id=${id}&role=admin`
        );
        if (result.data.matchedCount) {
          Swal.fire("Admin!", "This user has been admin.", "success");
          refetch();
        }
      }
    });
  };
  // handle make instractor funtion is here
  const handlemakeinstractor = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to make him instractor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make instractor!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.post(
          `/handleuserrole?id=${id}&role=instractor`
        );
        if (result.data.matchedCount) {
          Swal.fire("Instractor!", "This user has been instractor.", "success");
          refetch();
        }
      }
    });
  };
  return (
    <ContainerLayout>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>index</th>
              <th>User Name</th>
              <th>Details</th>
              <th>User Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={user?.photo} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{user?.name}</div>
                            <div className="text-sm opacity-50">
                              {user?.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h1>
                          phone :{" "}
                          <span className="text-xs font-Raleway">
                            {user?.phone}
                          </span>
                        </h1>
                        <h1>
                          Gender :{" "}
                          <span className="text-xs font-Raleway">
                            {user?.gender}
                          </span>
                        </h1>
                        <h1>
                          Address :{" "}
                          <span className="text-xs font-Raleway">
                            {user?.address}
                          </span>
                        </h1>
                      </td>
                      <td className="font-bold text-primary">{user?.role}</td>
                      <th className="flex justify-center gap-3 flex-col items-end">
                        <button
                          onClick={() => handlemakeadmin(user?._id)}
                          disabled={user?.role === "admin"}
                          className="px-5 py-2 disabled:opacity-30 bg-primary text-white border rounded-md"
                        >
                          Make Admin
                        </button>
                        <button
                            onClick={()=>handlemakeinstractor(user?._id)}
                          disabled={user?.role === "instractor"}
                          className="px-5 py-2 disabled:opacity-30 bg-transparent text-black border rounded-md"
                        >
                          Make Instractor
                        </button>
                      </th>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </ContainerLayout>
  );
};

export default ManageUsers;
