import React from 'react'

export default function StatusComp({handleInputChange}) {
  return (
  <>
   <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Status</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Active"
                onChange={handleInputChange}
                className="mr-2"
              />
              Active
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Deactive"
                onChange={handleInputChange}
                className="mr-2"
              />
              Deactive
            </label>
          </div>
        </div>
  </>
  )
}
