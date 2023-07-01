import { Dialog, DialogTitle } from "@mui/material";


export default function UserModal() {
    return (
        <>
        <Dialog onClose={() => {
       // setOpenAdd(false);
      }} open={true}>
        <DialogTitle className="bg-secondary"></DialogTitle>
        <div className="w-[250px] h-[300px] bg-primary sm:w-[350px] p-4 ">
          <div id="usersList" className="flex flex-col justify-start p-1 overflow-x-hidden h-full overflow-y-scroll">
            <>
            
            </>
          </div>
        </div>
      </Dialog>
        </>
    )
}