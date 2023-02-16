import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export default function ConfirmationModal({
  onClose,
  isOpen,
  children,
  title,
  primaryBtn,
  secondaryBtnText,
}: {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  primaryBtn: {
    text: string;
    onClick: () => void;
  };
  secondaryBtnText: string;
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button variant={"link"} size={"lg"} onClick={onClose}>
              {secondaryBtnText}
            </Button>
            <Button variant={"solid"} size={"lg"} onClick={primaryBtn.onClick}>
              {primaryBtn.text}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

ConfirmationModal.defaultProps = {
  secondaryBtnText: "Cancel",
  primaryBtn: {
    text: "Exit",
    onClick: () => alert("You exited the modal"),
  },
};
