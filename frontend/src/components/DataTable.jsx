import React from "react";

function DataTable({ funding }) {
  console.log(funding);

  let filterOutWords = [
    "housing",
    "community",
    "grant",
    "developers",
    "projects",
    "low",
  ];

  function rateSucces(word, filterOutWords) {
    return word.filter((word) => filterOutWords.includes(word)).length;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                PreviousId
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
              <th scope="col" className="px-6 py-3">
                ApplicationLink
              </th>
              <th scope="col" className="px-6 py-3">
                Resource
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                StartDate
              </th>
              <th scope="col" className="px-6 py-3">
                EndDate
              </th>
              <th scope="col" className="px-6 py-3">
                CreatedAt
              </th>
              <th scope="col" className="px-6 py-3">
                UpdatedAt
              </th>
            </tr>
          </thead>
          <tbody>
            {funding.map((fun, index) => (
              <tr>
                <td>{index + 1}</td>
                <td></td>
                <td data-label="link">
                  <a href={fun.Link} target="_blank">
                    {fun.Link}
                  </a>
                </td>
                <td></td>
                <td>{fun.Resource}</td>
                <td></td>
                <td>{fun.Description}</td>
                <td></td>
                <td></td>
                <td>{fun.CreatedAt}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
