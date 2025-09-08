import React, { useState } from "react";
import "./FileUploadModal.css";
import { MdComputer } from "react-icons/md";
import { FaDropbox } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa6";

const FileUploadModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("computer");
    

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-btn" type="button" onClick={onClose}>✕</button>

                <div className="modal-content">
                    {/* Sidebar */}
                    <div className="modal-sidebar">
                        <ul>
                            <li
                                className={activeTab === "computer" ? "active" : ""}
                                onClick={() => setActiveTab("computer")}
                            >
                                <div className="file-icon">
                                    <MdComputer className="f-icon" /> My Computer
                                </div>
                            </li>
                            <li
                                className={activeTab === "dropbox" ? "active" : ""}
                                onClick={() => setActiveTab("dropbox")}
                            >
                                <div className="file-icon">
                                    <FaDropbox className="f-icon" /> Dropbox
                                </div>
                            </li>
                            <li
                                className={activeTab === "gdrive" ? "active" : ""}
                                onClick={() => setActiveTab("gdrive")}
                            >
                                <div className="file-icon">
                                    <FaGoogleDrive className="f-icon" /> Google Drive
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Main Area */}
                    <div className="modal-main">
                        {activeTab === "computer" && (
                            <>
                                <p className="note">Upload a file from your computer</p>

                                {/* <div className="upload-wrapper"> */}
                                    <div className="upload-box">
                                        <p className="upload-text">Drag file here</p>
                                        <p className="upload-text">- or -</p>

                                        <input
                                            type="file"
                                            id="fileUpload"
                                            style={{ display: "none" }}
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <label htmlFor="fileUpload" className="choose-btn">
                                            Choose File
                                        </label>
                                    </div>
                                {/* </div> */}
                            </>

                        )}

                        {activeTab === "dropbox" && (
                            <>
                                 <p className="note">Upload a file from Dropbox</p>
                                <button className="connect-btn">Connect to Dropbox</button>
                                <p className="note2">
                                    We’ll open a new page to help you connect your Dropbox account.
                                </p>
                            </>
                        )}

                        {activeTab === "gdrive" && (
                            <>
                                 <p className="note">Upload a file from Google Drive</p>
                                <button className="connect-btn">Connect to Google Drive</button>
                                <p className="note2">
                                    We’ll open a new page to help you connect your Google Drive account.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUploadModal;
