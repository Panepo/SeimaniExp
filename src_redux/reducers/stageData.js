import {
	SORT_CHANGE
} from '../constants/ActionTypes'

import lokijs from 'lokijs'
import StageData from '../raw/data.json'

var db = new lokijs('db')
var dbStage = db.addCollection("dbStage")

for (var i=0; i<StageData.length; i++) {
	dbStage.insert(StageData[i])
}

const initialState = {
	s1normal: dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'N' }).simplesort('name').data(),
	s1hard: dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'H' }).simplesort('name').data(),
	s2normal: dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'N' }).simplesort('name').data(),
	s2hard: dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'H' }).simplesort('name').data(),
	s3normal: dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'N' }).simplesort('name').data(),
	s3hard: dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'H' }).simplesort('name').data()
}

export default function stageData(state = initialState, action) {
	switch (action.type) {
		case SORT_CHANGE: {
			return Object.assign({}, state, {
				s1normal: dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'N' }).simplesort(action.sortId).data(),
				s1hard: dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'H' }).simplesort(action.sortId).data(),
				s2normal: dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'N' }).simplesort(action.sortId).data(),
				s2hard: dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'H' }).simplesort(action.sortId).data(),
				s3normal: dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'N' }).simplesort(action.sortId).data(),
				s3hard: dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'H' }).simplesort(action.sortId).data()
			})
		}
		default:
			return state
	}
}
