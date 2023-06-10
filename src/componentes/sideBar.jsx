import { useState, useEffect } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const lat = localStorage.getItem("latitude");
  const long = localStorage.getItem("latitude");
  const historico = `[${lat}]  [${long}]`;

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-arrow" onClick={toggleSidebar}>
        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </div>
      <div className="sidebar-content">
        <h3>Perfil</h3>

        <h4>Quem pode me ver</h4>

        <div>
          <select id="users" value={selectedUser} onChange={handleUserChange}>
            <option value="">Selecione</option>
          </select>
        </div>
        <div>
          <h4>Meu histórico de localização</h4>
          <ul>
            <li>{historico}</li>
          </ul>
        </div>
        <div>
          <h4>Seguidores</h4>
          <ul>
            <li>João</li>
          </ul>
        </div>
      </div>
      <button className="btn_logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
