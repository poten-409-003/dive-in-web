// Kakao 로그인 API를 사용하기 위해 Kakao SDK를 로드하는 코드를 작성합니다.
// Kakao 타입을 정의합니다.

declare namespace Kakao {
  type KakaoError = {
    name: string;
    message: string;
  };

  function cleanup(): void;
  // init은 실패 시 KakaoError를 throw합니다.
  function init(appKey: string): void;
  function isInitialized(): boolean;

  namespace API {
    function cleanup(): void;
    function request<
      T = unknown,
      U extends Record<string, unknown> = Record<string, unknown>
    >({
      url,
      data,
      files,
    }: {
      url: string;
      data?: U;
      files: FileList | Array<File> | Array<Blob>;
    }): Promise<T>;
  }

  namespace Auth {
    type AuthSettings = {
      redirectUri?: string;
      state?: string;
      scope?: string;
      prompt?: string;
      loginHint?: string;
      nonce?: string;
      throughTalk?: boolean;
    };

    function authorize(settings: AuthSettings): void;
    function cleanup(): void;
    function getAccessToken(): string;
    function getAppKey(): string;
    function getStatusInfo(): Promise<StatusResponse | AuthError>;
    function logout(): Promise<LogoutResponse | AuthError>;
    function setAccessToken(token: string, persist?: boolean): void;

    type AuthError = {
      error: {
        code: number;
        msg: string;
      };
    };

    type LogoutResponse = {
      userInfo: {
        id: number;
      };
    };

    type StatusResponse = {
      statusInfo: {
        status: "connected" | "not_connected";
        user: Record<string, unknown>;
      };
    };
  }
}
