import { useState, useEffect } from "react";
import usePostFetch from "../../hooks/usePostFetch";

const Test = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [takeDate, setTakeDate] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [postData, setPostData] = useState(null);

  const { data, isLoading, error } = usePostFetch("gallery", postData);

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

    const formData = new FormData();
    formData.append("file_path", file);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("take_date", takeDate);
    formData.append("password", password);
    formData.append("username", username);
    setPostData(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Upload</button>
    </form>
  );
};

export default Test;
