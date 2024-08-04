import { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatar = useRef();
  const [errorMessage, setErrorMEssage] = useState("");
  const [loading, setLoading] = useState(false);
  const [validForm, setValidForm] = useState({
    avatar: false,
  });

  const isValidForm = () => {
    return validForm.avatar;
  };

  const handleAvatarChange = (evt) => {
    avatar.current.value = evt.target.value;
    setErrorMEssage(avatar.current.validationMessage);
    setValidForm({
      avatar: evt.target.validity.valid,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  };

  return (
    <PopupWithForm
      title="Mudar foto do perfil"
      name="avatar"
      buttonText={loading ? "Salvando..." : "Salvar"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValidForm}
    >
      <input
        className={
          errorMessage
            ? "avatar-popup__input avatar-popup__input_type_error"
            : "avatar-popup__input"
        }
        placeholder="Adicione a nova imagen"
        type="url"
        id="url-avatar"
        required
        name="avatar"
        ref={avatar}
        onChange={handleAvatarChange}
      />
      <span className="avatar-popup__input-error_active">{errorMessage}</span>
    </PopupWithForm>
  );
}
