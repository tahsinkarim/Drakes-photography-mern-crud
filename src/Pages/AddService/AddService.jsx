import React from "react";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.photoURL.value;
    const price = form.price.value;
    const description = form.description.value;
    const date = new Date().toISOString();
    const service = { title, img, price, description, date };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Created New Service");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className='text-2xl font-bold text-center'>Add a new service</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center max-w-3xl mx-auto my-4'>
          <label htmlFor='title' className='font-semibold text-sm'>
            Title
          </label>
          <input
            className='rounded px-2 py-2 bg-gray-200'
            type='text'
            name='title'
            required
          />
        </div>
        <div className='flex flex-col justify-center max-w-3xl mx-auto my-4'>
          <label htmlFor='photoURL' className='font-semibold text-sm'>
            Image URL
          </label>
          <input
            className='rounded px-2 py-2 bg-gray-200'
            type='text'
            name='photoURL'
            required
          />
        </div>
        <div className='flex flex-col justify-center max-w-3xl mx-auto my-4'>
          <label htmlFor='price' className='font-semibold text-sm'>
            Price
          </label>
          <input
            className='rounded px-2 py-2 bg-gray-200'
            type='number'
            name='price'
            required
          />
        </div>
        <div className='flex flex-col justify-center max-w-3xl mx-auto my-4'>
          <label htmlFor='description' className='font-semibold text-sm'>
            Description
          </label>
          <textarea
            className='rounded px-2 py-2 bg-gray-200'
            type='text'
            name='description'
            required
          ></textarea>
        </div>
        <div className='flex justify-center my-8'>
          <button
            className='text-sm font-bold tracking-widest bg-yellow-600/70 text-white w-40 mx-auto py-3 '
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
