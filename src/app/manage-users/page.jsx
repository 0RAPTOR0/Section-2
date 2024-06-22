'use client';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ManageUsers = () => {

  const [userList, setuserList] = useState([]);

    const fetchUserData = () => {
        axios.get('http://localhost:5000/user/getall')        //read operation from backend
        .then((result) => {
            console.table(result.data);
            setuserList(result.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {

      fetchUserData();
    
    }, [])

    const deleteUser = (id) => {
      axios.delete('http://localhost:5000/user/delete/'+id)
      .then((result) => {
        if(result.status === 200){
          fetchUserData();
        }
        
      }).catch((err) => {
        console.log(err);
      });
    }

    return (
      <div><>
        {/* Table Section */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Header */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                        Users
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Add users, edit and more.
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <a
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                          href="#"
                        >
                          View all
                        </a>
                        <a
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          Add user
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Header */}
                  {/* Table */}
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-50 dark:bg-neutral-800">
                      <tr>
                        <th scope="col" className="ps-6 py-3 text-start">
                          <label
                            htmlFor="hs-at-with-checkboxes-main"
                            className="flex"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-main"
                            />
                            <span className="sr-only">Checkbox</span>
                          </label>
                        </th>
                        <th
                          scope="col"
                          className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                        >
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                              Full Name
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                              E-mail
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                              City
                            </span>
                          </div>
                        </th>
                        
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                              Created
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-end" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">

                      {
                        userList.map( (user) => {
                          return (
                            <tr key={user._id}>
                              <td className="size-px whitespace-nowrap">
                                <div className="ps-6 py-3">
                                  <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                    <input
                                      type="checkbox"
                                      className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                      id="hs-at-with-checkboxes-1"
                                    />
                                    <span className="sr-only">Checkbox</span>
                                  </label>
                                </div>
                              </td>
                              <td className="size-px whitespace-nowrap">
                                <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                  <div className="flex items-center gap-x-3">
                                    <img
                                      className="inline-block size-[38px] rounded-full"
                                      src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                      alt="Image Description"
                                    />
                                    <div className="grow">
                                      <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                        {user.name}
                                      </span>
                                      
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="h-px w-72 whitespace-nowrap">
                                <div className="px-6 py-3">
                                  <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                    {user.email}
                                  </span>
                                  
                                </div>
                              </td>
                              <td className="size-px whitespace-nowrap">
                                <div className="px-6 py-3">
                                  <p>{user.city}</p>
                                </div>
                              </td>
                              
                              <td className="size-px whitespace-nowrap">
                                <div className="px-6 py-3">
                                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                                  {new Date(user.createdAt).toDateString()}
                                  </span>
                                </div>
                              </td>
                              <td className="size-px whitespace-nowrap">
                                <div className="px-6 py-1.5">
                                  <Link
                                    className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                                    href={'/update-user/'+user._id}
                                  >
                                    Edit
                                  </Link>
                                </div>
                              </td>

                              <td className="size-px whitespace-nowrap">
                                <div className="px-6 py-1.5">
                                  <button
                                  onClick={ () => { deleteUser(user._id) } }
                                    className="inline-flex items-center gap-x-1 text-sm text-red-600 decoration-2 hover:underline font-medium dark:text-red-500"
                                    
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        })
                      }

 
                    
                    </tbody>
                  </table>
                  {/* End Table */}
                  {/* Footer */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">
                          12
                        </span>{" "}
                        results
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <button
                          type="button"
                          className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                          Prev
                        </button>
                        <button
                          type="button"
                          className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                        >
                          Next
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Footer */}
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Table Section */}
      </>
</div>
    )
    

  }

  export default ManageUsers;