import { Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

const Card = ({ d }) => {
    return (
        <div>
            <Card className="border rounded-xl">
                <div className="relative w-full aspect-square">
                    <Image
                        src={d.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={d.name}
                        className="object-cover rounded-xl"
                    />

                    <Chip size="sm" className="absolute right-2 top-2">{d.brands}</Chip>
                </div>

                <div>
                    <h2 className="font-medium">{d.name}</h2>
                </div>

                <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                        <p><FaHeart /></p>
                        <p>{d.rating}</p>
                    </div>

                    <Separator orientation="vertical" />


                    <div className="flex items-center gap-2">
                        <p><BiDownload /></p>
                        <p>{d.price}</p>
                        <p>{d.rating}</p>
                    </div>
                </div>

                {/* <Link Link='../'>      <Button variant="outline" className={'w-full'}>View</Button></Link> */}

            </Card>
        </div>
    );
};

export default Card;