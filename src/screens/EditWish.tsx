import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Page } from "./Page";
import { AddWishForm } from "../components/forms/AddWishForm";
import { EditWishForm } from "../components/forms/EditWishForm";
import { api } from "../config/request";

export const EditWish = () => {
    const { hash, id } = useParams();
    const [wish, setWish] = React.useState<any>(null);

    const getWish = () => {
        api.get(`/wishlist/${hash}/item/${id}`).then((res) => {
            setWish(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getWish();
    }, []);

    return (
        <Page>
            <div className="container mx-auto px-20">
                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="text-4xl font-bold text-center">
                        Editing wish
                    </h1>
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        {wish?.name}
                    </h2>
                </div>
            </div>
            <div className="bg-neutral py-5 flex-auto">
                <div className="container mx-auto px-20">
                    <div className="">
                        { wish && <EditWishForm hash={hash} wish={wish} /> }
                    </div>
                </div>
            </div>
        </Page>
    );
};