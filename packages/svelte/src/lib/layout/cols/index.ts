// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright (c) 2026 Dani Rodríguez
import Col from './Col.svelte';
import ColsRoot from './Cols.svelte';

const Cols: typeof ColsRoot & { Col: typeof Col } = Object.assign(ColsRoot, { Col });

export default Cols;
