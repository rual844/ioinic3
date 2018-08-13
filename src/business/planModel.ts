export class planItem {
    id: number;
    imgUrl: string;
    title: string;
    subTitle: string;
    planDetail: detailObj[];
}

class detailObj {
    icon: string;
    title: string;
    color: string
    value: string;
};