"use server"

import axios from "axios";

export default async function getUserDetails(userID: any, token: any) {
    "use server";

        await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_API}userInfo`, {
            userId: userID,
            headers: { Authorization: `Bearer ${token}` },
          }).then((response) => {
            return response.data;
          });

      //return userDetails.data;
}