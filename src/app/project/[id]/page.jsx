"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
    const data = [
        { id: "1", img: "/Rectangle 12.png" },
        { id: "2", img: "/image 15.png" },
        { id: "3", img: "/image 16.png" },
        { id: "4", img: "/image 17.png" },
        { id: "5", img: "/image 18.png" },
    ];

    const params = useParams();
    const id = params.id;

    const project = data.find(el => el.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="w-full mt-[80px] px-4 sm:px-6 lg:px-8 py-8">

            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Image */}
                <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                    <Image
                        src={project.img}
                        alt="project image"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>

            </div>

        </div>

    );
}
