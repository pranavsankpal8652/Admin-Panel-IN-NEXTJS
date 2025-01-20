import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";

const ManageStories = () => {
    const [stories, setStories] = useState([
        {
            id: 1,
            storyName: "Story 1",
            image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
            bannerImage: "https://cdn.dribbble.com/users/9358822/screenshots/17654770/media/55b47027c4011bc8cef2cc1657dcc3ab.jpg?resize=400x0",
            description: "This is the description of Story 1",
            status: "Active",
        },
        {
            id: 2,
            storyName: "Story 2",
            image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
            bannerImage: "https://cdn.dribbble.com/users/9358822/screenshots/17654770/media/55b47027c4011bc8cef2cc1657dcc3ab.jpg?resize=400x0",
            description: "This is the description of Story 2",
            status: "Deactive",
        },
        {
            id: 3,
            storyName: "Story 3",
            image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
            bannerImage: "https://cdn.dribbble.com/users/9358822/screenshots/17654770/media/55b47027c4011bc8cef2cc1657dcc3ab.jpg?resize=400x0",
            description: "This is the description of Story 3",
            status: "Active",
        },
    ]);

    const [selectedStories, setSelectedStories] = useState([]);

    const handleSelectChange = (e, storyId) => {
        if (e.target.checked) {
            setSelectedStories((prev) => [...prev, storyId]);
        } else {
            setSelectedStories((prev) =>
                prev.filter((id) => id !== storyId)
            );
        }
    };

    const handleDelete = () => {
        const remainingStories = stories.filter(
            (story) => !selectedStories.includes(story.id)
        );
        setStories(remainingStories);
        setSelectedStories([]);
    };

    const handleStatusChange = (storyId) => {
        setStories((prev) =>
            prev.map((story) =>
                story.id === storyId
                    ? {
                        ...story,
                        status: story.status === "Active" ? "Deactive" : "Active",
                    }
                    : story
            )
        );
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <CustomBreadcrumb prevpage="Story" currenPage="Manage Story" />

            <h1 className="text-2xl font-bold mb-4">Manage Stories</h1>

            <div className="mb-4">
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                    Delete Selected Stories
                </button>
            </div>

            <table className="w-full border-collapse bg-white shadow-md">
                <thead>
                    <tr className="border-b">
                        <th className="p-2">
                            <input
                                type="checkbox"
                                checked={selectedStories.length === stories.length}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedStories(stories.map((s) => s.id));
                                    } else {
                                        setSelectedStories([]);
                                    }
                                }}
                            />
                        </th>
                        <th className="p-2">S. No.</th>
                        <th className="p-2">Story Name</th>
                        <th className="p-2">Image</th>
                        <th className="p-2">Banner</th>
                        <th className="p-2">Description</th>
                        <th className="p-2">Action</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {stories.map((story, index) => (
                        <tr key={story.id} className="border-b text-center">
                            <td className="p-2">
                                <input
                                    type="checkbox"
                                    checked={selectedStories.includes(story.id)}
                                    onChange={(e) => handleSelectChange(e, story.id)}
                                />
                            </td>
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{story.storyName}</td>
                            <td className="p-2 w-20 mx-auto">
                                <img
                                    src={story.image} // Online image URL
                                    alt={story.storyName}
                                    className="w-16 h-16 "
                                />
                            </td>
                            <td className="p-2 w-32 mx-auto">
                                <img
                                    src={story.bannerImage} // Online banner image URL
                                    alt={story.storyName}
                                    className="w-32 h-16 "
                                />
                            </td>
                            <td className="p-2">{story.description}</td>
                            <td className="p-2">
                                <button
                                    onClick={() => alert(`Edit story ${story.id}`)}
                                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                            </td>
                            <td className="p-2 text-center">
                                <button
                                    onClick={() => handleStatusChange(story.id)}
                                    className={`py-1 px-3 rounded ${story.status === "Active"
                                            ? "bg-green-500"
                                            : "bg-gray-500"
                                        } text-white`}
                                >
                                    {story.status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageStories;
