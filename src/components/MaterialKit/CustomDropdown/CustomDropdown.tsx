import React from 'react'
// nodejs library that concatenates classes
import clsx from 'clsx'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import Divider from '@material-ui/core/Divider'
import Popper from '@material-ui/core/Popper'
// core components
import Button from '../CustomButtons/Button'

import styles from '../../../assets/jss/material-kit-pro/components/customDropdownStyle'

const useStyles = makeStyles(styles)

interface Props {
    hoverColor?:
        | 'dark'
        | 'primary'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger'
        | 'rose'
    buttonText?: React.ReactNode
    buttonIcon?: React.ElementType
    dropdownList?: []
    buttonProps?: React.ReactPropTypes
    dropup?: boolean
    dropdownHeader?: React.ReactNode
    rtlActive?: boolean
    caret: boolean
    dropPlacement?:
        | 'bottom'
        | 'top'
        | 'right'
        | 'left'
        | 'bottom-start'
        | 'bottom-end'
        | 'top-start'
        | 'top-end'
        | 'right-start'
        | 'right-end'
        | 'left-start'
        | 'left-end'
    noLiPadding: boolean
    innerDropDown: boolean
    navDropdown: boolean
    onClick: Function
}

const CustomDropdown: React.FC<Props> = props => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event: MouseEvent) => {
        if (anchorEl) {
            if (anchorEl.contains(event.target)) setAnchorEl(null)
        } else {
            setAnchorEl(event.currentTarget)
        }
    }
    const handleClose = event => {
        if (anchorEl.contains(event.target)) {
            return
        }
        setAnchorEl(null)
    }
    const handleCloseMenu = param => {
        setAnchorEl(null)
        if (props && props.onClick) {
            props.onClick(param)
        }
    }
    const {
        buttonText,
        buttonIcon,
        dropdownList,
        buttonProps,
        dropup,
        dropdownHeader,
        caret,
        hoverColor,
        dropPlacement,
        rtlActive,
        noLiPadding,
        innerDropDown,
        navDropdown,
    } = props
    const classes = useStyles()
    const caretClasses = clsx({
        [classes.caret]: true,
        [classes.caretDropup]: dropup && !anchorEl,
        [classes.caretActive]: Boolean(anchorEl) && !dropup,
        [classes.caretRTL]: rtlActive,
    })
    const dropdownItem = clsx({
        [classes.dropdownItem]: true,
        [classes[hoverColor + 'Hover']]: true,
        [classes.noLiPadding]: noLiPadding,
        [classes.dropdownItemRTL]: rtlActive,
    })
    const dropDownMenu = (
        <MenuList role="menu" className={classes.menuList}>
            {dropdownHeader !== undefined ? (
                <MenuItem
                    onClick={() => handleCloseMenu(dropdownHeader)}
                    className={classes.dropdownHeader}>
                    {dropdownHeader}
                </MenuItem>
            ) : null}
            {dropdownList.map((prop, key) => {
                if (prop.divider) {
                    return (
                        <Divider
                            key={key}
                            onClick={() => handleCloseMenu('divider')}
                            className={classes.dropdownDividerItem}
                        />
                    )
                } else if (
                    prop.props !== undefined &&
                    prop.props['data-ref'] === 'multi'
                ) {
                    return (
                        <MenuItem
                            key={key}
                            className={dropdownItem}
                            style={{ overflow: 'visible', padding: 0 }}>
                            {prop}
                        </MenuItem>
                    )
                }
                return (
                    <MenuItem
                        key={key}
                        onClick={() => handleCloseMenu(prop)}
                        className={dropdownItem}>
                        {prop}
                    </MenuItem>
                )
            })}
        </MenuList>
    )
    return (
        <div className={innerDropDown ? classes.innerManager : classes.manager}>
            <div className={buttonText !== undefined ? '' : classes.target}>
                <Button
                    aria-label="Notifications"
                    aria-owns={anchorEl ? 'menu-list' : null}
                    aria-haspopup="true"
                    {...buttonProps}
                    onClick={handleClick}>
                    {buttonIcon !== undefined ? (
                        <props.buttonIcon className={classes.buttonIcon} />
                    ) : null}
                    {buttonText !== undefined ? buttonText : null}
                    {caret ? <b className={caretClasses} /> : null}
                </Button>
            </div>
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                transition
                disablePortal
                placement={dropPlacement}
                className={clsx({
                    [classes.popperClose]: !anchorEl,
                    [classes.pooperResponsive]: true,
                    [classes.pooperNav]: Boolean(anchorEl) && navDropdown,
                })}>
                {() => (
                    <Grow
                        in={Boolean(anchorEl)}
                        style={
                            dropup
                                ? { transformOrigin: '0 100% 0' }
                                : { transformOrigin: '0 0 0' }
                        }>
                        <Paper className={classes.dropdown}>
                            {innerDropDown ? (
                                dropDownMenu
                            ) : (
                                <ClickAwayListener onClickAway={handleClose}>
                                    {dropDownMenu}
                                </ClickAwayListener>
                            )}
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}

CustomDropdown.defaultProps = {
    caret: true,
    dropup: false,
    hoverColor: 'primary',
}

export default CustomDropdown
