import { useState, useEffect } from "react";
import usePutFetch from "../../hooks/usePutFetch";

const ModiTest = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [takeDate, setTakeDate] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [galleryId, setGalleryId] = useState(null);
  const [formData, setFormData] = useState(null);

  const { data, isLoading, error } = usePutFetch("gallery", formData);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.append("file_path", file);
    newFormData.append("description", description);
    newFormData.append("location", location);
    newFormData.append("take_date", takeDate);
    newFormData.append("password", password);
    newFormData.append("username", username);
    newFormData.append("galleryId", galleryId);
    setFormData(newFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Gallery ID"
        onChange={(e) => setGalleryId(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        value={takeDate}
        onChange={(e) => setTakeDate(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default ModiTest;
