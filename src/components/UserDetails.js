import { LocationMarkerIcon, LinkIcon, NewspaperIcon } from "@heroicons/react/solid";
import { ReactComponent as TwitterLogo } from '../twitter.svg';

const UserDetails = ({user, errorMsg}) => {
    if(!user) {
        return (
            <div className={`w-full px-4 py-6 dark:bg-bluegray-300 bg-bluegray-200 ${errorMsg ? 'text-red-500' : 'text-white'} rounded-2xl mt-8 flex flex-col gap-6`}>
                {errorMsg || 'No user'}
            </div>
        )
    } else {
            const joinedDate = new Date(user.created_at);
            return (
                <div className="w-full px-4 py-6 dark:bg-bluegray-300 bg-bluegray-200 text-white rounded-2xl mt-8 flex flex-col gap-6">
                    <div className="flex gap-4">
                        <img src={user.avatar_url} className="rounded-full w-24 h-1/4" alt="Avatar" />
                        <div>
                            <h2 className="text-xl font-bold">{user.name || 'No Username'}</h2>
                            <span className="text-bluegray-100">@{user.login}</span>
                            <p className="mt-4">Joined {joinedDate.toLocaleString('en-GB', {dateStyle: 'medium' })}</p>
                        </div>
                    </div>
                    <p className="">{user.bio}</p>
                    <div className="dark:bg-bluegray-400 bg-bluegray-100 p-4 rounded-xl flex justify-around">
                        <div className="flex flex-col gap-2 text-center">
                            <span className="block text-sm">Repos</span>
                            <span>{user.public_repos}</span>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <span className="block text-sm">Followers</span>
                            <span>{user.followers}</span>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <span className="block text-sm">Following</span>
                            <span>{user.following}</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <LocationMarkerIcon className="w-6 h-6 shrink-0" />
                        <span className="truncate">{user.location || <span className="text-gray-500">Location not set</span>}</span>
                    </div>
                    <div className="flex gap-4">
                        <LinkIcon className="w-6 h-6 shrink-0" />
                        <span className="truncate"><a href={user.html_url}>{user.html_url}</a></span>
                    </div>
                    <div className="flex gap-4">
                        <TwitterLogo title="Twitter Logo" className="w-6 h-6 shrink-0" />
                        <span className="truncate">{user.twitter_username || <span className="text-gray-500">Not available</span>}</span>
                    </div>
                    <div className="flex gap-4">
                        <NewspaperIcon className="w-6 h-6 shrink-0" />
                        <span className="truncate">{user.blog || <span className="text-gray-500">Not available</span>}</span>
                    </div>
                </div>
            )

        }
    }

export default UserDetails;