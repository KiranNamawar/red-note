export default function lastUpdated(updatedAt: Date) {
    const now = new Date().getTime();
    const updated = new Date(updatedAt).getTime();
    const diffInSeconds = (now - updated) / 1000;
    if (diffInSeconds < 60) {
        return `last edited ${diffInSeconds.toFixed(0)} sec ago`;
    } else if (diffInSeconds < 3600) {
        return `last edited ${(diffInSeconds / 60).toFixed(0)} min ago`;
    } else if (diffInSeconds < 86400) {
        return `last edited ${(diffInSeconds / 3600).toFixed(0)} hours ago`;
    } else if (diffInSeconds < 2592000) {
        return `last edited ${(diffInSeconds / 86400).toFixed(0)} days ago`;
    } else if (diffInSeconds < 31536000) {
        return `last edited ${(diffInSeconds / 2592000).toFixed(0)} months ago`;
    } else {
        return `last edited ${(diffInSeconds / 31536000).toFixed(0)} years ago`;
    }
}
