export class PostDto {
    content: {
        rendered
    }
    title: {
        rendered
    }
    _embedded: {
        'wp:featuredmedia': {
            source_url
        }[]
    }
    link
}