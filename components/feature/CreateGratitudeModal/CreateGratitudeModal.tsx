import { Modal } from "antd";

import { ModalFooter } from "./ModalFooter";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { GratitudesService } from "Services/gratitudes";
import dayjs from "dayjs";
import { useStore } from "@/store/store";
import { ExpandingTextarea } from "Components/base/Textarea/Textarea";

export const CreateGratitudeModal: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen = false, onClose }) => {
  const profile = useStore((state) => state.profile);

  const [text, setText] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(dayjs().format("MMMM D, YYYY"));
  }, []);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;

    setText(value);
  };

  const handlePublic = (value: boolean) => {
    setIsPublic(value);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setText("");
    setIsPublic(false);
    setDate("");
  };

  const handleSubmit = () => {
    GratitudesService.createGratitude({
      gratitude: text,
      isPublic,
      userId: profile.id
    });

    handleClose();
  };

  return (
    <Modal
      className="sg-box-shadow rounded-[20px]"
      open={isOpen}
      destroyOnClose={true}
      onCancel={handleClose}
      footer={
        <ModalFooter
          onCancel={handleClose}
          onSubmit={handleSubmit}
          onPublicChange={handlePublic}
          isPublic={isPublic}
          loading={false}
        />
      }
    >
      <div className="flex flex-col">
        <ExpandingTextarea
          className="text-3xl text-white text-center mt-8 mb-2 placeholder-white placeholder-opacity-50"
          onChange={handleTextChange}
          placeholder="My simple gratitude is.."
          value={text}
        />
        <span className="create-gratitude-from">
          Shared by {profile?.username}
        </span>
        <span className="create-gratitude-date">{date}</span>
      </div>
    </Modal>
  );
};
