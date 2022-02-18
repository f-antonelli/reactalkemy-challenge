import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

const ModalDetails = ({ open, handleClose, menuItem }) => {
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className="mb-2">Dish details</DialogTitle>
        <DialogContent>
          <img src={menuItem.img} alt={menuItem.name} className="mb-4" />
          <p>Name: {menuItem.name}</p>
          <p>Price: ${menuItem.price}</p>
          <p>Score: {menuItem.score}</p>
          <p>Preparation time: {menuItem.time}min</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalDetails;
