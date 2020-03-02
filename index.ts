import OpenAPIClientAxios, { Document } from 'openapi-client-axios';
import { OperationMethods } from './client';
import * as listenNotesURL from './listennotes.json';

export interface ListennotesConfigs {
	definition?: string | Document;
	withCredentials?: boolean;
	headers?: { [header: string]: string | string[] };
	key?: string | null;
}

export default async function getListenNotesAPI(configs: ListennotesConfigs = {}) {
	const { definition = listenNotesURL, withCredentials = false, headers = {}, key = null } = configs;

	const extraHeaders = {
		common: headers
	};

	if (key) extraHeaders.common['X-ListenAPI-Key'] = key;

	const axiosConfigDefaults = {
		withCredentials,
		headers: extraHeaders
	};

	const api = new OpenAPIClientAxios({ definition, axiosConfigDefaults });
	const client = api.init<OperationMethods>();
	return client;
}
