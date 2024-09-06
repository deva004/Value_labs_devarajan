import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  let loadingColumns = [1, 2, 3, 4, 5]
  useEffect(() => {
    getData()
  }, [])
  async function getData() {
    setIsLoading(true)
    const response = await fetch('https://dummyjson.com/products')
    const res_data = await response.json()
    setData(res_data?.products)
    setIsLoading(false)
  }
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className="w-full h-full ">
      <table className="table">
        <tr className="">
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
        {!isLoading && data.map((data) => (
          <tr key={data.id} className="text-black text-center">
            <td>{data.id}</td>
            <td >{data.title}</td>
            <td className="max-w-[500px]">{data.description}</td>
            <td className="w-full flex justify-center items-center"><img className="h-[150px]" src={data?.images[0]} /></td>
          </tr>
        ))}



      </table>
    </div>
  );
}

export default App;
