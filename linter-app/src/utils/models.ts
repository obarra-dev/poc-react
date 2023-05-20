
export interface ResultIdentifier {
    repoHost: string;
    owner: string;
    repo: string;
    jobId: string;
  }
  
  export function resultIdentifier(
    repoHost: string,
    owner: string,
    repo: string,
    jobId: string
  ): ResultIdentifier {
    return {
      repoHost,
      owner,
      repo,
      jobId,
    };
  }
  