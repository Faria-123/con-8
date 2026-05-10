// import { Card } from "@heroui/react";
import Banner from "@/Components/Banner";
import Card from "@/Components/Card";
import Image from "next/image";

export default async function Home() {
  const res = await fetch('https://con-8.vercel.app/data2.json');
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <Banner />
      {
        data.map(d => <Card key={d.id} d={d}> </Card>)
      }

    </div>
  );
}
