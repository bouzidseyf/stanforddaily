import React from "react";
import { View, Text } from "react-native";
import { ArchivePageData } from "helpers/wpapi";
import LoadingView from "components/Loading";
import ArticlesView from "components/ArticlesView";

export enum ArchivePageType {
  Time,
  Category,
  Tag,
}

export interface ArchivePageProps {
  type: ArchivePageType;
  initData: ArchivePageData;
  getExtraData: (pageNumber: number) => Promise<ArchivePageData>;
}

export interface ArchivePageState {}

export default class ArchivePage extends React.Component<
  ArchivePageProps,
  ArchivePageState
> {
  static async getInitialProps(param): Promise<any> {
    return {};
  }

  render(): React.ReactNode {
    const { initData, getExtraData } = this.props;
    if (!initData) {
      return <LoadingView />;
    }

    return (
      <ArticlesView
        initPosts={initData.posts}
        getExtraPosts={async pageNumber => {
          const extraData = await getExtraData(pageNumber);
          return extraData.posts;
        }}
      />
    );
  }
}