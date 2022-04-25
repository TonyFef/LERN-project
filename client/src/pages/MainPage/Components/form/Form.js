import { formHeader } from "../../../../helpers/variables";
import { useState } from "react";
import { useMessage } from "../../../../hooks/message.hook";

export const Form = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const alertMessage = useMessage();

    const submitForm = (e) => {
        e.preventDefault();

        if (name.length < 4) {
            alertMessage("Name should be no less than 4 symbols");
        }
        if (phone.length < 10) {
            alertMessage("Phone should be no less than 4 symbols");
        }
        if (email.length < 4) {
            alertMessage("Email should be no less than 4 symbols");
        }
        if (message.length < 10) {
            alertMessage("Message should be no less than 10 symbols");
        }

        if (name.length > 3 && phone.length > 9 && email.length > 3 && message.length > 9) {
            alertMessage("Message has been sent! Thank you!");
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div className="form-all">
            <h2>{formHeader}</h2>
            <form className="row g-3 needs-validation" onSubmit={submitForm}>
                <div className="col-md-4">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
                            setName(e.target.value);
                        }}
                        placeholder="Mark"
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Phone number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        onChange={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9\s]/g, "");
                            setPhone(e.target.value);
                        }}
                        placeholder="+7 (...) ...-..-.."
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustomUsername"
                            onChange={(e) => {
                                e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s]/g, "");
                                setEmail(e.target.value);
                            }}
                            placeholder="youremail@domen.com"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                </div>
                <div className="col-md-6 form-message">
                    <label className="form-label">Message</label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        onChange={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, "");
                            setMessage(e.target.value);
                        }}
                        placeholder="Your message"
                        required
                    />
                    <div className="invalid-feedback">Please provide a valid city.</div>
                </div>
                <div className="col-12">
                    {/* <div className="form-check">
                        <input className="form-check-input" type="checkbox" placeholder="" id="invalidCheck" required />
                        <label className="form-check-label">Agree to terms and conditions</label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                    </div> */}
                </div>
                <div className="col-12 form-btn">
                    <button className="btn btn-primary" type="submit">
                        Submit form
                    </button>
                </div>
            </form>
        </div>
    );
};
