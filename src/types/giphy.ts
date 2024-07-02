

interface GiphyDataImagesExtra {
    url: string;
}

interface GiphyDataImages {
    original: GiphyDataImagesExtra;
}

interface GiphyData {
    id: string;
    title:string;
    images: GiphyDataImages;
}

interface GiphyMeta {
    msg: string;
    response_id: string;
    status: number;
}

interface GiphyPagination {
    count: number;
    offset: number;
    total_count: number;
}

interface GiphyResponse {
    data: Array<GiphyData>;
    meta: GiphyMeta;
    pagination: GiphyPagination;
}