import React, { useState } from "react";
import styles from "./CreateStack.module.scss";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { Image, Loader } from "lucide-react";
import { useAuth } from "../../components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const languagesStack = [
  "JavaScript",
  "Python",
  "React",
  "React Native",
  "Node.js",
  "Next.js",
  "Nest",
];

const CreateStack = () => {
  const { userId } = useAuth();
  const [steps, setSteps] = useState(1);
  const [title, setTitle] = useState("");
  const [desciption, setDesciption] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [loadingImg, setLoadingImg] = useState(false);
  const navigate = useNavigate();
  const handleNextStep = () => {
    if (steps === 1) {
      if (title === "") {
        toast.error("Please write down title for your stack");
      } else {
        setSteps((prev) => prev + 1);
      }
    }

    if (steps === 2) {
      if (desciption === "") {
        toast.error("Please write down desciption for your stack");
      } else {
        setSteps((prev) => prev + 1);
      }
    }

    if (steps === 3) {
      if (languages.length === 0) {
        toast.error(
          "Please write down languages that you are used in your project"
        );
      } else {
        setSteps((prev) => prev + 1);
      }
    }
    if (steps === 4) {
      if (imageSrc.length === 0) {
        toast.error("Please upload image for your stack");
      } else {
        setSteps((prev) => prev + 1);
      }
    }
    if (steps === 5) {
      handleSubmitStack();
    }
  };

  const handleSubmitStack = async () => {
    try {
      console.log(userId);
      const res = await axios
        .post("http://localhost:3000/stack", {
          title: title,
          description: desciption,
          imageSrc: imageSrc,
          languages: languages,
          userId: userId,
        })
        .then((res) => toast.success("Your Stack is succesfully uploaded"))
        .then(() => navigate("/"));
    } catch (err) {
      console.log(err);
      toast.error("Error while submitting stack");
    }
  };
  const [languages, setLanguages] = useState<string[]>([]);

  const handleChooseLanguage = (lang: string) => {
    setLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((item) => item !== lang)
        : [...prev, lang]
    );
  };
  const handleBackStep = () => {
    setSteps((prev) => prev - 1);
  };

  const handleChangeImage = async (event: any) => {
    setLoadingImg(true);
    const file = event.target.files[0];
    if (!file) {
      return toast.error("File error");
    }
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "stackSocial");
    data.append("cloud_name", "dunqlufpi");

    await axios
      .post("https://api.cloudinary.com/v1_1/dunqlufpi/image/upload", data)
      .then((res) => setImageSrc(res.data.url))
      .then(() => setLoadingImg(false));
  };

  return (
    <div className={styles.create_stack}>
      {/* ProgressBar */}
      <div className={styles.create_stack_progress_bar}>
        <div
          style={{
            width:
              steps === 1
                ? "10%"
                : steps === 2
                ? "30%"
                : steps === 3
                ? "50%"
                : steps === 4
                ? "80%"
                : steps === 4
                ? "100%"
                : "100%",
          }}
        ></div>
      </div>

      {/* Step 1 */}
      {steps === 1 && (
        <div className={styles.create_stack_steps}>
          <h2>Create your title</h2>
          <div className={styles.create_stack_input}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write your title"
              maxLength={50}
            />
            <span>50 / {title.length}</span>
          </div>
          <Button onClick={handleNextStep}>Next Step</Button>
        </div>
      )}

      {steps === 2 && (
        <div className={styles.create_stack_steps}>
          <h2>Create your desciption</h2>

          <div className={styles.create_stack_input}>
            <textarea
              onChange={(e) => setDesciption(e.target.value)}
              placeholder="Write your title"
              maxLength={500}
            />
            <span>500 / {desciption.length}</span>
          </div>
          <div className={styles.create_stack_buttons}>
            <Button variant="primaryOut" onClick={handleBackStep}>
              Come back
            </Button>
            <Button onClick={handleNextStep}>Next Step</Button>
          </div>
        </div>
      )}
      {steps === 3 && (
        <div className={styles.create_stack_steps}>
          <h2>Choose your stack languages</h2>
          <div className={styles.create_stack_languages}>
            {languagesStack.map((item) => (
              <button
                style={{
                  background: languages.includes(item) ? "#000" : "",
                  color: languages.includes(item) ? "#fff" : "",
                }}
                onClick={() => handleChooseLanguage(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={styles.create_stack_buttons}>
            <Button variant="primaryOut" onClick={handleBackStep}>
              Come back
            </Button>
            <Button onClick={handleNextStep}>Next Step</Button>
          </div>
        </div>
      )}
      {steps === 4 && (
        <div className={styles.create_stack_steps}>
          <h2>Choose your image</h2>
          {loadingImg && (
            <div className={styles.create_stack_upload}>
              <Loader />
            </div>
          )}
          {!loadingImg && !imageSrc && (
            <div className={styles.create_stack_upload}>
              <label htmlFor="upload">
                <Image width={100} height={100} />
              </label>
              <input type="file" id="upload" onChange={handleChangeImage} />
            </div>
          )}
          {imageSrc && (
            <div className={styles.create_stack_upload}>
              <img src={imageSrc} width={400} height={400} />
            </div>
          )}
          <div className={styles.create_stack_buttons}>
            <Button variant="primaryOut" onClick={handleBackStep}>
              Come back
            </Button>
            <Button onClick={handleNextStep}>Next Step</Button>
          </div>
        </div>
      )}
      {steps === 5 && (
        <div className={styles.create_stack_steps}>
          <h2>Preview of your stack</h2>

          <div className={styles.create_stack_preview}>
            <img src={imageSrc} width={400} height={400} />

            <div className={styles.create_stack_preview_heading}>
              <h2>{title}</h2>
              <p>{desciption}</p>
              <div className={styles.create_stack_preview_languages}>
                {languages.map((item) => (
                  <button>{item}</button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.create_stack_buttons}>
            <Button variant="primaryOut" onClick={handleBackStep}>
              Come back
            </Button>
            <Button onClick={handleNextStep}>Next Step</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateStack;
