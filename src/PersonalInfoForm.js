import React from 'react';

class PersonalInfoForm extends React.Component {
  render() {
    return (
        <div className="personal-info-form">
            <form className="personal-info-form-labels">
                <div className='field'>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" />
                    <div className='field'>
                        <label htmlFor="age">Age:</label>
                        <input id="age" type="number" />
                    </div>
                    <div className='field'>
                        <label htmlFor='Address'>Address:</label>
                        <input id='Address' type='text' />
                    </div>
                    <div className='field'>
                        <label htmlFor='Church'>Church:</label>
                        <input id='Church' type="text" />
                    </div>
                    <div className='field'>
                        <label htmlFor='Baptized'>Baptized:</label>
                        <label htmlFor='button'>Yes</label>
                        <input id='button' type="checkbox" />
                        <label htmlFor='button'>No</label>
                        <input id='button' type="checkbox" />
                    </div>
                    <div className='field'>
                        <label htmlFor="Ministry">Ministry in Church:</label>
                        <label htmlFor='button'>Yes</label>
                        <input id='button' type="checkbox" />
                        <label htmlFor='button'>No</label>
                        <input id='button' type="checkbox" />
                    </div>
                    <div className="field">
                        <label htmlFor="If Yes, please specify ministry(s)">If Yes, please specify ministry(s):</label>
                        <input id="If Yes, please specify ministry(s)" type="textarea" />
                    </div>
                    </div>
                </form>
            </div>
    );
  }
}

export default PersonalInfoForm;