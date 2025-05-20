import { baseApi } from "./baseApi";

type RequestData = {
    _id: string;

    roomType: string;
  
    rooms: number;
  
    dates: string;
  
    comment: string;
  
    invitedPerson: string;
  
    vistitPurpose: string;
  
    requestAuthor: string;
  
    phoneNumber: string;
  
    email: string;
  
    requestStatus: boolean;
  
    personalDataAgree: boolean;
}


const requestsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getRequests: build.query<RequestData[], string>({
            query: () => '/booking-requests',
            providesTags: ['Requests'],
        }),
        patchRequest: build.mutation<RequestData, Partial<RequestData> & Pick<RequestData, '_id'>>({
            query: (body) => ({
                url: `booking-requests/${body._id}`,
                method: 'PATCH',
                body,
              }),
              invalidatesTags: ['Requests'],
        })
    }),
    overrideExisting: true,
})

export const { useGetRequestsQuery, usePatchRequestMutation } = requestsApi