import { RepoType } from "../../../../generated/website";

export function buildIdForGetAllJobsCache({
  repoType,
  owner,
  name,
}: BuildIdForGetAllJobsCacheProps) {
  return `${repoType}-${owner}-${name}`;
}

interface BuildIdForGetAllJobsCacheProps {
  repoType: RepoType;
  owner: string;
  name: string;
}

export interface RepositoriesListIdentifier {
  repoType: RepoType;
  owner: string;
}
export function buildIdForRepositoriesListIdentifier({
  repoType,
  owner,
}: RepositoriesListIdentifier) {
  return `${repoType}-${owner}`;
}
