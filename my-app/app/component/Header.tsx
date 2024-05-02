import * as React from "react";
//import { UsersRound } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const Header = () => {

    return (
        <div className="flex p-3 px-8 items-center justify-between text-text-color">
            <div className="flex items-center gap-2" >
                <Image className="rounded-lg" src={"/secure_share_logo.png"} alt={"logo secure share"} width={64} height={64}/>
                <span>
                    Secure Share
                </span>
                
            </div>
            <Stack spacing={2} direction="row">
                <Link href={"/chiffrement"}>CHIFFREMENT</Link>
                <Link href={"/faq"}>DECHIFFREMENT</Link>
                <Link href={"/info"}>QUI SOMMES NOUS ?</Link>
            </Stack>
            <div>
                <Link href={"/inscription"}><Button variant="contained">S'INSCRIRE</Button></Link>
                <Link href={"/connection"}><Button variant="contained">CONNEXION</Button></Link>
            </div>
        </div>
    );
};