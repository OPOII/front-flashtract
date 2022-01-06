export interface RequestRespose {
    content:          Content[];
    pageable:         string;
    last:             boolean;
    totalElements:    number;
    totalPages:       number;
    number:           number;
    size:             number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

 interface Content {
    id:      number;
    input:   string;
    output:  string;
    repeats: number;
}

 interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
