"use client";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
    const params = useParams();
    const id = params.id;

    return <div className="pt-40">{id}</div>;

}
