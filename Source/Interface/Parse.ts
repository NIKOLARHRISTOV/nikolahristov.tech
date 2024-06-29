/**
 * @module Parse
 *
 */
export default interface Interface {
	(Packages: Set<Cell>): Promise<Set<PackagesRowItem>>;
}

import type PackagesRowItem from "../Interface/PackagesRowItem.js";
import type Cell from "../Type/Cell.js";
