import React from 'react'

function FormSection() {
    return (
      <div className="dash-form-container">
            <form className="form">
                <h1 className="dash-form-head">Add a Product</h1>
          <div className="form-body">
            <input
              type="text"
              className="form-input"
              placeholder="Product Name"
                    />
            </div>
          <div className="form-body ">
            <input
              type="text"
              className="form-input"
              placeholder="Product ImageURL"
                    />
            </div>
          <div className="form-body ">
            <input
              type="number"
              className="form-input"
              placeholder="Product Price"
                    />
            </div>
          <div className="form-body mt-4">
          <textarea className="dash-textarea" placeholder="Product Description"></textarea>
            </div>
         
        </form>
      </div>
    );
}

export default FormSection
