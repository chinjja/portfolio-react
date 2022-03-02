import React, { useState } from 'react';
import { AppBar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Container, Grid, IconButton, Link, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core';
import banner from '../images/banner.jpg'
import me from '../images/me.jpg'
import m1 from '../images/m1.png'
import cal from '../images/calendar.png'
import cafe from '../images/cafe.png'
import { Variant } from '@material-ui/core/styles/createTypography';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginTop: "16px",
      marginBottom: "16px",
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    contents: {
        maxWidth: 800,
        margin: "auto",
        paddingLeft: "16px",
        paddingRight: "16px",
    },
    card: {
        // maxWidth: 345,
    },
    subtitle: {
        marginTop: "16px",
        marginBottom: "16px",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }
  }));

export function View() {
    const classes = useStyles();

    return (
        <div>
            <header>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6">😀안녕하세요, 박정현입니다!👋</Typography>
                    </Toolbar>
                </AppBar>
            </header>
            <main>
                <Toolbar/>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={banner}
                    title="Contemplative Reptile"
                />
                
                <Container maxWidth="md">
                    <CardMedia
                        component="img"
                        image={process.env.PUBLIC_URL + '/logo.png'}
                        style={{
                            position: "relative",
                            top: "-40px",
                            maxWidth: "80px",
                            marginBottom: "-20px"
                    }}/>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {Subtitle('안녕하세요, 박정현입니다! 👋', 'h4')}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image={me}
                                title="Contemplative Reptile"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            {TypoLink("📧 Email", "chinjja@gmail.com", true)}
                            {TypoLink("🐱 GitHub", "https://github.com/chinjja")}
                            {TypoLink("📚 BOJ", "https://www.acmicpc.net/user/chinjja")}
                            {/* {TypoLink("🍀 Naver Blog", "https://www.naver.com")} */}
                            {/* {TypoLink("📷 Instagram", "https://www.instagram.com")} */}
                            <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fchinjja%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
                        </Grid>

                        <Grid item xs={12}>
                            {Description("App Developer", [
                                "코드로 일하는 개발자",
                                "문제해결을 즐기는 개발자",
                                "사람들이 필요로 하는 것이 무엇인지 고민하는 개발자",
                            ])}
                        </Grid>

                        {/* <Grid item xs={12}>
                            {Subtitle('🏆 Awards')}
                            {Awards()}
                        </Grid> */}
                        
                        <Grid item xs={12}>
                            {Subtitle('🛠️ Stacks')}
                            {Stacks()}
                        </Grid>
                        
                        {/* <Grid item xs={12}>
                            {Subtitle('🎒 Activities')}
                            {Activities()}
                        </Grid> */}
                        
                        <Grid item xs={12}>
                            {Subtitle('👩‍💻 Projects')}
                            {Projects()}
                        </Grid>

                        {/* <Grid item xs={12}>
                            {Subtitle('👩‍🏫 Education')}
                            {Education()}
                        </Grid> */}

                    </Grid>
                </Container>

            </main>
            <footer>
                <Link href="https://icons8.com">https://icons8.com</Link>
            </footer>
        </div>
    )
}

function Subtitle(title: string, variant: Variant = "h5") {
    const classes = useStyles();
    return <Typography className={classes.subtitle} variant={variant}>{title}</Typography>
}

function TypoLink(label: string, url: string, disable_href: boolean | undefined = undefined) {
    return (
        <div style={{
            marginBottom: "16px",
        }}>
            <Typography display="block" align="left">{label}</Typography>
            <Link href={disable_href?undefined:url} display="block" align="left">{url}</Link>
        </div>
    )
}

function Awards() {
    return (
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>A</TableCell>
                        <TableCell>B</TableCell>
                        <TableCell>C</TableCell>
                        <TableCell>D</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>4</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

function Stacks() {
    return (
        <>
        {Description("Java", [
            "Java를 사용해여 Android 앱을 개발해 본 경험이 있습니다.",
            "Swing을 사용하여 프로젝트를 개발했습니다.",
            "Java를 사용해서 생각을 구현으로 이끌어 낼 수 있습니다.",
        ])}
        {Description("Git", [
            "Git을 활용한 소스코드 버전 관리 및 협업을 할 수 있습니다.",
        ])}
        {Description("ReactiveX, RxJava, RxDart", [
            "반응형 프로그래밍 작성 가능.",
            "비동기에 대해서 이해하고 있으며 Rx를 쓰지 않고도 개발가능.",
        ])}
        {Description("Flutter", [
            "현재 습득 중 입니다..",
            "레퍼런스를 참고해서 생각을 앱으로 제작 가능.",
        ])}
        </>
    )
}

function Description(title: string, description: string[]) {
    let desc = description.map((d, i) => 
    <Typography key={i} variant="body1" align="left" color="textSecondary">{d}</Typography>
    )

    return (
        <>
        <Typography variant="h6" align="left">{title}</Typography>
        {Spacer("8px")}
        {desc}
        {Spacer("16px")}
        </>
    )
}

function Spacer(space: string) {
    return <div style={{marginBottom: space}}></div>
}

function Activities() {
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            {Activity()}
            </Grid>
            
            <Grid item xs={12} sm={6}>
            {Activity()}
            </Grid>
            
            <Grid item xs={12} sm={6}>
            {Activity()}
            </Grid>
        </Grid>
        </>
    )
}

function Projects() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <CollapseCard 
                image={m1}
                title='장비 제어 프로그램 with Java' 
                subheader='' 
                content={
                    <>
                    <Typography paragraph>Java, Swing을 사용하여 사내 제작 설비 제어 프로그램 개발.</Typography>
                    <Typography paragraph>구현한 기능</Typography>
                    <Typography paragraph>1. UI (Swing)</Typography>
                    <Typography paragraph>2. DB (SQLite)</Typography>
                    <Typography paragraph>3. 각종 디바이스 통신 (Serial or TCP or HTTP)</Typography>
                    <Typography paragraph>4. 설비 제어</Typography>
                    </>
                }/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <CollapseCard 
                image={cal}
                title='Calendar App with Flutter' 
                subheader='https://github.com/chinjja/flutter_calendar_app' 
                content={
                    <>
                    <Typography paragraph>Flutter의 기본적인 사용법을 익히기 위해 진행</Typography>
                    <Typography paragraph>구현한 기능</Typography>
                    <Typography paragraph>1. 월간 보기(수직 스크롤)</Typography>
                    <Typography paragraph>2. 일간 보기</Typography>
                    <Typography paragraph>3. 이벤트 상세보기</Typography>
                    <Typography paragraph>4. 이벤트 편집기능(yet..)</Typography>
                    </>
                }/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <CollapseCard 
                image={cafe}
                title='Cafe App with Spring boot' 
                subheader='https://github.com/chinjja/cafe' 
                content={
                    <>
                    <Typography paragraph>Spring boot의 기본적인 사용법을 익히기 위해 진행</Typography>
                    <Typography paragraph>구현한 기능</Typography>
                    <Typography paragraph>1. 재귀적인 카테고리 생성/삭제</Typography>
                    <Typography paragraph>2. 재귀적인 답글 생성/삭제</Typography>
                    <Typography paragraph>3. 좋아요 기능</Typography>
                    <Typography paragraph>4. 조회수 기능 (1분)</Typography>
                    <Typography paragraph>5. 카페가입/탈퇴 기능</Typography>
                    <Typography paragraph>6. 카페 운영진 가입승인 기능</Typography>
                    <Typography paragraph>7. Bootstrap UI</Typography>
                    </>
                }/>
            </Grid>
        </Grid>
        </>
    )
}

interface CollapseCardProps {
    image: string,
    title: string,
    subheader: string,
    content: JSX.Element,
}

function CollapseCard(props: CollapseCardProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <>
        <Card className={classes.card}>
            <CardActionArea onClick={handleExpandClick}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={props.image}
                    title="Contemplative Reptile"
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.subheader}
                    </Typography>
                </CardContent>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                        <hr/>
                        {props.content}
                    </CardContent>
                </Collapse>
            </CardActionArea>
            <CardActions>
                <IconButton
                    className={expanded?classes.expandOpen:classes.expand}
                    onClick={handleExpandClick}>
                    <ExpandMore/>
                </IconButton>
            </CardActions>
        </Card>
        </>
    )
}

function Education() {
    return (
        <Typography variant="body1">2000</Typography>
    )
}

function Activity() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={banner}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}