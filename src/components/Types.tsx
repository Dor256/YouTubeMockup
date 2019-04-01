type Thumbnail = {
    height: number,
    url: string,
    width: number
}

type Snippet = {
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    publishedAt: string,
    thumbnails: {
        default: Thumbnail,
        high: Thumbnail,
        medium: Thumbnail
    },
    title: string
}

export type VideoObject = {
    etag: string,
    id: {
        kind: string,
        videoId: string
    },
    kind: string,
    snippet: Snippet,
    title: string
}

export type ApiObject = {
    etag: string,
    items: VideoObject[],
    kind: string,
    nextPageToken: string,
    pageInfo: {
        resultsPerPage: number,
        totalResults: number
    },
    regionCode: string
}

export type BaseProps = {
    video?: VideoObject
}