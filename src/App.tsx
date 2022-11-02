import { FormEvent } from "react";
import "./App.css";
import { user } from "./validations/user";
import { useDynamic } from "./hooks/dynamic";

const hobbiess = ["sky-diving", "soccer", "tennis", "jumping", "voleyball"];
const categories = ["tech", "sport", "b2b"];

function App() {
  const form = useDynamic(
    user,
    (data) => ({
      hobbies: { minLength: data.name ? 5 : 3 },
      isActive: { required: !!data.name },
      gender: { required: data.hobbies.length > 3 },
    }),
    ["name", "email", "hobbies"]
  );

  const { name, email, age, category, isActive, hobbies, gender } = form.data;

  console.log("....");

  const submitHanlder = (e: FormEvent) => {
    e.preventDefault();

    console.log(form.validate());
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={submitHanlder} onReset={form.resetForm}>
          <input
            type="text"
            name="name"
            onChange={form.updateField}
            onBlur={form.blurField}
            value={name.value}
          />
          <br />
          <small>{name.error}</small>
          <br />
          <input
            type="text"
            name="email"
            onChange={form.updateField}
            onBlur={form.blurField}
            value={email.value}
          />
          <br />
          {email.touched && <small>{email.error}</small>}
          <br />
          <input
            type="number"
            name="age"
            onChange={form.updateField}
            onBlur={form.blurField}
            value={age.value}
          />
          <br />
          {age.touched && <small>{age.error}</small>}
          <br />
          <div>
            {hobbiess.map((hobbie, index) => (
              <div key={index}>
                <label htmlFor={`hobbie${index}`}>{hobbie}</label>
                <input
                  id={`hobbie${index}`}
                  type="checkbox"
                  name="hobbies"
                  value={hobbie}
                  onChange={form.updateList}
                  onBlur={form.blurList}
                  checked={hobbies.value.includes(hobbie)}
                />
              </div>
            ))}
          </div>
          <br />
          <small>{form.data.hobbies.error || ""}</small>
          <hr />
          <input
            type="checkbox"
            name="isActive"
            onChange={form.updateField}
            onBlur={form.blurField}
            checked={isActive.value}
          />
          <br />
          <small>{isActive.error}</small>
          <hr />
          <input
            type="radio"
            name="gender"
            value={"male"}
            onChange={form.updateField}
            checked={gender.value === "male"}
            onBlur={form.blurField}
          />
          <input
            type="radio"
            value={"female"}
            name="gender"
            onChange={form.updateField}
            checked={gender.value === "female"}
            onBlur={form.blurField}
          />
          <br />
          <small>{gender.error}</small>
          <hr />
          <select
            name="category"
            onChange={form.updateField}
            defaultValue={category.value || "default"}
          >
            <option value="default" disabled>
              select category
            </option>
            {categories.map((ctg, key) => (
              <option key={key} value={ctg}>
                {ctg}
              </option>
            ))}
          </select>
          <br />
          <small>{category.error}</small>
          <hr />
          <button type="submit">submit</button>
          <button type="reset">reset</button>
        </form>
      </div>
    </div>
  );
}

export default App;
