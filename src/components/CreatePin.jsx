import React, { useState, useRef } from 'react';

const CreatePin = () => {
  const [image, setImage] = useState(null);
  const [formEnabled, setFormEnabled] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const formRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFormEnabled(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag(e);
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="w-full container mx-auto bg-white p-4 xl:p-6 rounded-lg shadow-xl flex flex-col xl:flex-row justify-between cursor-pointer">
      {/* Image Upload */}
      <div className="border border-dashed border-gray-300 p-6 rounded-lg w-full xl:w-[35%] h-auto mb-4 xl:mb-0">
        {!image && (
          <div className="text-center">
            <p>Choose a file or drag and drop it here</p>
            <p className="text-sm text-gray-500">
              We recommend using high quality .jpg files less than 20MB or .mp4
              files less than 200MB.
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/jpeg, image/png, image/gif, video/mp4"
          className="hidden"
          id="file-input"
          onChange={handleImageUpload}
        />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="w-full h-auto mb-4 rounded-xl"
          />
        )}
        <label
          htmlFor="file-input"
          className="block text-center text-blue-500 cursor-pointer mt-4"
        >
          Upload Image
        </label>
      </div>
      {/* Create Form */}
      <form className={`flex flex-col gap-4 w-full xl:w-3/5 ${!formEnabled ? 'opacity-40' : 'opacity-100' }`} ref={formRef} onSubmit={handleSubmit}>
        <label className="space-y-1">
          <span> Title</span>
          <input
            type="text"
            placeholder="Add a title"
            disabled={!formEnabled}
            className={`w-full px-3 py-2 border ${
              formEnabled ? "border-gray-400" : "border-gray-200"
            } rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
        </label>
        <label className="space-y-1">
          <span>Description</span>
          <textarea
            placeholder="Add a detailed description"
            disabled={!formEnabled}
            className={`w-full min-h-24 px-3 py-2 border ${
              formEnabled ? "border-gray-400" : "border-gray-200"
            } rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500`}
          ></textarea>
        </label>
        <label className="space-y-1">
          <span>Link</span>
          <input
            type="text"
            placeholder="Add a link"
            disabled={!formEnabled}
            className={`w-full px-3 py-2 border ${
              formEnabled ? "border-gray-400" : "border-gray-200"
            } rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
        </label>
        <label className="space-y-1">
          <span>Category</span>
          <select
            disabled={!formEnabled}
            className={`w-full px-3 py-2 border ${
              formEnabled ? "border-gray-400" : "border-gray-200"
            } rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500`}
          >
            <option value="">Select category</option>
            <option value="board1">Board 1</option>
            <option value="board2">Board 2</option>
          </select>
        </label>
        <div>
          <label className="block mb-2">Tagged topics</label>
          <input
            type="text"
            value={tagInput}
            onChange={handleTagInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Add a tag"
            disabled={!formEnabled}
            className={`w-full px-3 py-2 border ${
              formEnabled ? "border-gray-300" : "border-gray-200"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <span className="text-sm opacity-80">
            Don't worry, people won't see your tags
          </span>
          <div className="flex flex-wrap gap-2 my-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 font-bold"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={() => handleDeleteTag(tag)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePin;
