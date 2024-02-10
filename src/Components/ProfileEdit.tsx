import React, { ChangeEvent, useContext, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { AuthContext } from "../Context/AuthContextApi";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { storage } from "../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// ================================================
interface profile {
  username: string;
  image: File | null;
}
const ProfileEdit: React.FC = () => {
  const { user }: any = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const [profile, setProfile] = useState<profile>({
    username: "",
    image: null,
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Update the state with the selected file
      // console.log(e.target.files[0]);
      const selectedImage = e.target.files[0]; //explicitly assign the file
      setProfile((prev) => ({ ...prev, image: selectedImage }));
    }
  };

  //   ======================================   update profile =================
  const uploadProfileImage = () => {
    const imagestorageRef = ref(storage, user.uid);

    // 'file' comes from the Blob or File API
    let image: any = profile.image;
    uploadBytes(imagestorageRef, image).then(() => {
      // console.log("Uploaded a blob or file!");
      getDownloadURL(imagestorageRef)
        .then((url) => {
          // console.log("success", url);
          //   return url;
          const currentUser = auth.currentUser;
          if (currentUser) {
            let newUrl = `${url}`;
            updateProfile(currentUser, {
              displayName: profile.username,
              photoURL: newUrl,
            })
              .then(() => {
                // Profile updated!
                // ...
                // console.log(user);
              })
              .catch(() => {
                // An error occurred
                // ...
                // console.log(error);
              });
          }
        })
        .catch((err: any) => {
          alert(err);
        });
    });
  };
  const SaveProfile = () => {
    console.log(profile);
    uploadProfileImage(); //synchonously uploading...
  };
  return (
    <>
      <div>
        <Button
          className="w-[200px] h-[50px] p-2 bg-item2 rounded-md"
          onClick={() => setOpenModal(true)}
        >
          {" "}
          Edit Profile
        </Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Body>
            <div className="text-[15px] md:text-[18px] flex flex-col gap-4">
              <label htmlFor="" className="flex flex-col gap-2">
                <h1>Username</h1>
                <input
                  className="text-[15px] rounded-md"
                  type="text"
                  name=""
                  placeholder="username"
                  id=""
                  onChange={(e) =>
                    setProfile((prev) => {
                      return { ...prev, username: e.target.value };
                    })
                  }
                />
              </label>
              {/* <label htmlFor="" className="flex flex-col gap-2">
                <h1>Email</h1>
                <input
                  className="text-[15px] rounded-md"
                  type="text"
                  name=""
                  placeholder="update email"
                  id=""
                />
              </label> */}

              <label htmlFor="" className="flex flex-col gap-2">
                <h1>Update Profile image</h1>
                <input
                  className="text-[15px] rounded-md bg-item3"
                  type="file"
                  name=""
                  id=""
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-blue-800"
              onClick={() => {
                setOpenModal(false);
                SaveProfile();
              }}
            >
              Save Changes
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ProfileEdit;
