import React from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import LoadAlluser from "../../CustomHook/LoadAlluser";
import PrimaryButton from "../../reusedComponents/PrimaryButton";
import SecondaryButton from "../../reusedComponents/SecondaryButton";

const ManageUsers = () => {
  const [refetch, users] = LoadAlluser();
  console.log(users);
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
              users.map((user,index) => {
                return (
                  <>
                    <tr>
                      <td>{index+1}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={user?.photo}
                              />
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
                        <h1>phone : <span className="text-xs font-Raleway">{user?.phone}</span></h1>
                        <h1>Gender : <span className="text-xs font-Raleway">{user?.gender}</span></h1>
                        <h1>Address : <span className="text-xs font-Raleway">{user?.address}</span></h1>
                      </td>
                      <td className="font-bold text-primary">{user?.role}</td>
                      <th className="flex justify-center gap-3 flex-col items-end">
                        <button disabled={user?.role === 'admin'} className="px-5 py-2 disabled:opacity-30 bg-primary text-white border rounded-md">Make Admin</button>
                        <button disabled={user?.role === 'instractor'} className="px-5 py-2 disabled:opacity-30 bg-transparent text-black border rounded-md">Make Instractor</button>
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
