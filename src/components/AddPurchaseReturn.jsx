import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoIosCloseCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';

import './AddPurchaseReturn.css'

function AddPurchaseReturn() {

  const [value, setValue] = useState('');
  const quillRef = useRef(null);

  // Toolbar options matching the screenshot
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['code-block'],
      ['clean']
    ],
  };
  
  // Word count logic
  const handleChange = (content) => {
    const text = content.replace(/(<([^>]+)>)/gi, ''); // Strip HTML tags
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount <= 60) {
      setValue(content);
    }
  };
  
  // Workaround for findDOMNode issue
  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.root.setAttribute('data-placeholder', 'Type the message');
    }
  }, []);

  return (
    <>
      <div className='section'>

        {/* header */}
        <div className='header'>
          <p>Add Purchase Return</p>
          <Link to="/AllProducts"><IoIosCloseCircle className='cross'/></Link>
        </div>

        {/* conatiner*/}
        <div className='container'>

          {/* supplier */}
          <div className='supplier'>

            <div className='box'>
              <p className='title'>Supplier name
                <span className='star'> *</span></p>
              <div className='supplier-button'>
              <select className='option'>
                <option>select</option>
              </select>
              <button type="submit" className='plus'><CiCirclePlus className='plus-icon' /></button>
              </div>
            </div>

            <div className='box'>
              <p className='title'>Date
                <span className='star'> *</span></p>
              <input type="date" className='input-box' />
            </div>

            <div className='box'>
              <p className='title'>Reference
                <span className='star'> *</span></p>
              <input type="text" className='input-box'/>
            </div>

          </div>

          {/* product */}
          <div className='supplier-2'>

            <div className='box-2'>
              <p className='title'>Product
                <span className='star'> *</span></p>
              <input type="text" className='input-box-2' placeholder='search product'/>
            </div>

          </div>
          
          {/* image box */}
          <div className='supplier-3'>

            <div className='box-3'>
              <div type="text" className='input-box-3'>
                <div>Image</div>
                <div>Date</div>
                <div>Supplier</div>
                <div>Reference</div>
                <div>Status</div>
                <div>Total ($)</div>
                <div>Paid ($)</div>
                <div>Due ($)</div>
                <div>Payment Status</div>
              </div>
            </div>

          </div>
          
          {/* order */}
          <div className='supplier-4'>

            <div className='box'>
              <p className='title'>Order Tax
                <span className='star'> *</span></p>
              <input type="text" className='input-box' placeholder='0'/>
            </div>
            
            <div className='box'>
              <p className='title'>Discount
                <span className='star'> *</span></p>
              <input type="text" className='input-box' placeholder='0'/>
            </div>
            
            <div className='box'>
              <p className='title'>Shipping
                <span className='star'> *</span></p>
              <input type="text" className='input-box' placeholder='0'/>
            </div>

            <div className='box'>
              <p className='title'>Status
                <span className='star'> *</span></p>
              <select className='option'>
                <option>select</option>
              </select>
            </div>

          </div>
          
          {/* description */}
          <div className='supplier-5'>

            <div className='box'>
              <p className='title'>Description
                <span className='star'> *</span></p>
            </div>

            <ReactQuill ref={quillRef} theme="snow" value={value} onChange={handleChange} modules={modules} placeholder="Type the message" className="box-5"/>
            
            <div className='box-6'>
              <p className='title'>Maximum 60 words</p>
            </div>

          </div>
          
        </div>

        {/* buttons */}
        <div className='box-buttons'>
          <div className='buttons'>
            <Link to="/AllProducts" className='button-1'>Cancel</Link>
            <Link to="/AllProducts" className='button-2'>Submit</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddPurchaseReturn;
