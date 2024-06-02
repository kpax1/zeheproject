"use client";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import * as LR from "@uploadcare/blocks";
import Image from "next/image";
LR.registerBlocks(LR);
const Page = () => {
  const ctxProviderRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [imgId, setImgid] = useState([]);
  const [form, setForm] = useState({
    name: "",
    author: "",
    description: "",
    duration: "",
    cost: "",
    img: "",
  });
  console.log(form)

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (event) => {
      setFiles([...event.detail.allEntries.filter((file) => file.status === 'success')]);
  
    };

    ctxProvider.addEventListener('change', handleChangeEvent);

    return () => {
      ctxProvider.removeEventListener('change', handleChangeEvent);
    };
  }, [setFiles]);



    const imageAdd =()=>{
      setForm({
        ...form,
        img: files[0].cdnUrl
      })
    }


    console.log(files);
    console.log(form)
  const handleClick = async () => {

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form), // Stringify the entire form object
      });
      return res.json();
    } catch (error) {}
  };

  return (
    <div>
      Page
      <h1> add a course bro</h1>
      <div>
        <lr-config
          ctx-name="my-uploader"
          pubkey="56d8a883fcb1586c115d"
          maxLocalFileSizeBytes={10000000}
          imgOnly={true}
          sourceList="local, url, camera, instagram"
        ></lr-config>
        <lr-file-uploader-regular
          css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
          ctx-name="my-uploader"
          class="my-config"
        ></lr-file-uploader-regular>
        <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />{" "}
      </div>

        <button onClick={imageAdd}>
          addd IMAGE
        </button>
      <div>
        {files.map((file) => (
          <div key={file.uuid}>
            <Image width={200}
            height={200}
              src={file.cdnUrl}
              alt={file.fileInfo.originalFilename}
            />
          </div>
        ))}
      </div>
      <input
        type="text"
        id="name"
        value={form.name}
        placeholder="name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        id="author"
        value={form.author}
        placeholder="author"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <textarea
        type="text"
        id="description"
        value={form.description}
        placeholder="description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="text"
        id="cost"
        value={form.cost}
        placeholder="cost"
        onChange={(e) => setForm({ ...form, cost: e.target.value })}
      />
      <input
        type="text"
        id="duration"
        value={form.duration}
        placeholder="duration"
        onChange={(e) => setForm({ ...form, duration: e.target.value })}
      />
    
      <button onClick={handleClick}>add course</button>
    </div>
  );
};

export default Page;
